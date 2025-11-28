// RoiCalculator.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ROI_CONFIGS } from "./roiConfig";
import "./ROICalculator.css";
import AnimatedElement from "../CommonUsedComponents/AnimatedElement/AnimatedElement";

// Indian number format: 12,34,567 (lakhs and crores)
const numberWithCommas = (x) => {
    if (!x) return x;
    const numStr = x.toString();
    const lastThree = numStr.substring(numStr.length - 3);
    const otherNumbers = numStr.substring(0, numStr.length - 3);
    if (otherNumbers !== '') {
        return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree;
    }
    return lastThree;
};

const RoiCalculator = () => {
    // default selection – first config
    const [segment, setSegment] = useState(ROI_CONFIGS[0].segment);
    const [location, setLocation] = useState(ROI_CONFIGS[0].location);
    const [propertyType, setPropertyType] = useState(
        ROI_CONFIGS[0].propertyType
    );
    const [adType, setAdType] = useState(ROI_CONFIGS[0].adType);

    const [sellUnits, setSellUnits] = useState(50); // like your UI
    const [durationMonths, setDurationMonths] = useState(6);
    const [sellUnitsError, setSellUnitsError] = useState('');

    // dropdown options from config
    const segments = [...new Set(ROI_CONFIGS.map((c) => c.segment))];
    const locations = [
        ...new Set(
            ROI_CONFIGS.filter((c) => c.segment === segment).map((c) => c.location)
        ),
    ];
    const propertyTypes = [
        ...new Set(
            ROI_CONFIGS.filter(
                (c) => c.segment === segment && c.location === location
            ).map((c) => c.propertyType)
        ),
    ];
    const adTypes = [
        ...new Set(
            ROI_CONFIGS.filter(
                (c) =>
                    c.segment === segment &&
                    c.location === location &&
                    c.propertyType === propertyType
            ).map((c) => c.adType)
        ),
    ];

    // ensure dependent selections are valid when parent changes
    useEffect(() => {
        if (!locations.includes(location) && locations.length > 0) {
            setLocation(locations[0]);
        }
    }, [segment, locations, location]);

    useEffect(() => {
        if (!propertyTypes.includes(propertyType) && propertyTypes.length > 0) {
            setPropertyType(propertyTypes[0]);
        }
    }, [segment, location, propertyTypes, propertyType]);

    useEffect(() => {
        if (!adTypes.includes(adType) && adTypes.length > 0) {
            setAdType(adTypes[0]);
        }
    }, [segment, location, propertyType, adTypes, adType]);

    const selectedConfig = useMemo(
        () =>
            ROI_CONFIGS.find(
                (c) =>
                    c.segment === segment &&
                    c.location === location &&
                    c.propertyType === propertyType &&
                    c.adType === adType
            ),
        [segment, location, propertyType, adType]
    );

    // calculated metrics based on Sell Units
    const metrics = useMemo(() => {
        if (!selectedConfig) return null;

        const {
            baseLeads,
            baseQL,
            baseSV,
            baseBookings,
            cpl,
            cpql,
            cpsv,
            cpb,
        } = selectedConfig;

        const leads = baseLeads * sellUnits;
        const ql = baseQL * sellUnits;
        const sv = baseSV * sellUnits;
        const bookings = baseBookings * sellUnits;

        const totalBudget = cpb * sellUnits;

        return {
            leads,
            ql,
            sv,
            bookings,
            cpl,
            cpql,
            cpsv,
            cpb,
            totalBudget,
        };
    }, [selectedConfig, sellUnits]);

    // chart data – simple linear growth across months
    const chartData = useMemo(() => {
        if (!metrics) return null;

        const labels = Array.from(
            { length: durationMonths },
            (_, i) => `M${i + 1}`
        );

        const makeSeries = (total) =>
            labels.map((_, i) => Math.round((total * (i + 1)) / durationMonths));

        return {
            labels,
            datasets: [
                {
                    label: "Bookings",
                    data: makeSeries(metrics.bookings),
                    borderColor: "#E6B035",
                    backgroundColor: "rgba(230, 176, 53, 0.1)",
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                },
                {
                    label: "Site Visits",
                    data: makeSeries(metrics.sv),
                    borderColor: "#f4c563",
                    backgroundColor: "rgba(244, 197, 99, 0.1)",
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                },
                {
                    label: "Leads",
                    data: makeSeries(metrics.leads),
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                },
            ],
        };
    }, [metrics, durationMonths]);

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    color: "rgba(255, 255, 255, 0.7)",
                    font: {
                        family: "Bricolage Grotesque, sans-serif",
                    }
                }
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: "rgba(255, 255, 255, 0.7)" }
            },
            y: {
                grid: {
                    display: true,
                    color: "rgba(255, 255, 255, 0.1)"
                },
                ticks: { color: "rgba(255, 255, 255, 0.7)" }
            },
        },
    };

    if (!metrics) return <div>No config found for this combination.</div>;

    return (
        <div className="Container SectionLargeTopPadding roi-calculator-container">
            {/* Heading Section - Animated */}
            <AnimatedElement animation="fade-up" duration={0.8} delay={0}>
                <div className="roi-heading-wrapper">
                    <div className="roi-badge">
                        ROI CALCULATOR
                    </div>
                    <h1 className="roi-main-heading">
                        The ROI Forecast. Input Your Vision, Discover Your Projected Return on&nbsp;
                        <span className="roi-heading-gradient">
                            Brand Investment.
                        </span>
                    </h1>
                    <p className="roi-description">
                        Input your data, and let our ROI-driven strategies show you the scalable growth we can deliver. Precise, data-backed insights to fuel your next big move.
                    </p>
                </div>
            </AnimatedElement>

            <div className="roi-main-layout">
                {/* LEFT: Filters Panel - Animated */}
                <AnimatedElement animation="fade-right" duration={0.8} delay={0.2}>
                    <div className="roi-filters-panel">
                        {/* Dropdown row 1 */}
                        <div className="roi-dropdown-row">
                            <Select
                                label="Segment"
                                value={segment}
                                options={segments}
                                onChange={setSegment}
                            />
                            <Select
                                label="Location"
                                value={location}
                                options={locations}
                                onChange={setLocation}
                            />
                        </div>

                        {/* Dropdown row 2 */}
                        <div className="roi-dropdown-row">
                            <Select
                                label="Property Type"
                                value={propertyType}
                                options={propertyTypes}
                                onChange={setPropertyType}
                            />
                            <Select
                                label="Ad Type"
                                value={adType}
                                options={adTypes}
                                onChange={setAdType}
                            />
                        </div>

                        {/* Sell Units + Duration */}
                        <div className="roi-controls-row">
                            <div className="roi-input-group">
                                <label className="roi-input-label">
                                    Sell Units
                                </label>
                                <input
                                    type="number"
                                    min={50}
                                    value={sellUnits}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (value === '') {
                                            setSellUnits('');
                                            setSellUnitsError('');
                                        } else {
                                            const numValue = Number(value);
                                            setSellUnits(numValue);

                                            if (numValue < 50) {
                                                setSellUnitsError('Minimum 50 units required');
                                            } else {
                                                setSellUnitsError('');
                                            }
                                        }
                                    }}
                                    onBlur={(e) => {
                                        const value = Number(e.target.value);
                                        if (!value || value < 50) {
                                            setSellUnits(50);
                                            setSellUnitsError('');
                                        }
                                    }}
                                    className={`roi-input ${sellUnitsError ? 'error' : ''}`}
                                />
                                {sellUnitsError && (
                                    <span className="roi-input-error">{sellUnitsError}</span>
                                )}
                            </div>

                            {/* Duration select - Hidden for now */}
                            {/* <div className="roi-input-group">
                                <label className="roi-input-label">
                                    Duration
                                </label>
                                <select
                                    value={durationMonths}
                                    onChange={(e) => setDurationMonths(Number(e.target.value))}
                                    className="roi-select"
                                >
                                    <option value={3}>3 Months</option>
                                    <option value={6}>6 Months</option>
                                    <option value={9}>9 Months</option>
                                    <option value={12}>12 Months</option>
                                </select>
                            </div> */}
                        </div>

                        <p className="roi-disclaimer">
                            Disclaimer: The data is based on past experience and for
                            informational purposes only.
                        </p>
                    </div>
                </AnimatedElement>

                {/* RIGHT: KPI cards + chart - Animated */}
                <AnimatedElement animation="fade-left" duration={0.8} delay={0.4}>
                    <div className="roi-results-panel">
                        {/* KPI cards */}
                        <div className="roi-kpi-grid">
                            <KpiCard
                                title="Leads"
                                value={numberWithCommas(metrics.leads)}
                                subtitle={`CPL ₹${numberWithCommas(metrics.cpl)}`}
                            />
                            <KpiCard
                                title="QL"
                                value={numberWithCommas(metrics.ql)}
                                subtitle={`CPQL ₹${numberWithCommas(metrics.cpql)}`}
                            />
                            <KpiCard
                                title="SV"
                                value={numberWithCommas(metrics.sv)}
                                subtitle={`CPSV ₹${numberWithCommas(metrics.cpsv)}`}
                            />
                            <KpiCard
                                title="Bookings"
                                value={numberWithCommas(metrics.bookings)}
                                subtitle={`CPB ₹${numberWithCommas(metrics.cpb)}`}
                            />
                        </div>

                        <div className="roi-total-budget">
                            Total Budget: ₹{numberWithCommas(metrics.totalBudget)}
                        </div>

                        <div className="roi-chart-container">
                            {chartData && <Line data={chartData} options={chartOptions} />}
                        </div>
                    </div>
                </AnimatedElement>
            </div>
        </div>
    );
};

// Small reusable components
const Select = ({ label, value, options, onChange }) => (
    <div className="roi-input-group">
        <label className="roi-input-label">
            {label}
        </label>
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="roi-select"
        >
            {options.map((opt) => (
                <option key={opt} value={opt}>
                    {opt}
                </option>
            ))}
        </select>
    </div>
);

const KpiCard = ({ title, value, subtitle }) => (
    <div className="roi-kpi-card">
        <div className="roi-kpi-title">{title}</div>
        <div className="roi-kpi-value">
            {value}
        </div>
        <div className="roi-kpi-subtitle">{subtitle}</div>
    </div>
);

export default RoiCalculator;
