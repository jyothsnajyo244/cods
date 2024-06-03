import React from 'react';
import './dashboard.css';

const Dashboard = () => {
    // Sample data for procurement, inventory, manufacturing, and orders
    const procurementData = {
        totalSpend: 100000,
        vendorPerformance: {
            deliveryTime: 'On-time',
            qualityRating: 4.5,
            priceTrend: 'Stable'
        }
        // Add more procurement metrics as needed
    };

    const inventoryData = {
        inventoryLevels: {
            totalItems: 500,
            lowStockItems: 20
        },
        stockMovement: {
            incoming: 100,
            outgoing: 80
        }
        // Add more inventory metrics as needed
    };

    const manufacturingData = {
        productionSchedule: {
            pendingOrders: 5,
            inProgressOrders: 3
        },
        resourceUtilization: {
            machinery: '90%',
            labor: '80%',
            rawMaterials: '95%'
        }
        // Add more manufacturing metrics as needed
    };

    const ordersData = {
        orderFulfillment: {
            pendingOrders: 10,
            fulfilledOrders: 90
        },
        salesPerformance: {
            totalRevenue: 50000,
            profitMargin: '20%'
        }
        // Add more orders metrics as needed
    };

    return (
        <div >
            <h1 className='header'>Dashboard</h1>
          
        <div className="dashboard">
            <h1>Procurement</h1>
            <div className="section">
                <h2>Total Spend: ${procurementData.totalSpend}</h2>
                <p>Delivery Time: {procurementData.vendorPerformance.deliveryTime}</p>
                <p>Quality Rating: {procurementData.vendorPerformance.qualityRating}</p>
                <p>Price Trend: {procurementData.vendorPerformance.priceTrend}</p>
            </div>

            <h1>Inventory</h1>
            <div className="section">
                <h2>Total Items: {inventoryData.inventoryLevels.totalItems}</h2>
                <p>Low Stock Items: {inventoryData.inventoryLevels.lowStockItems}</p>
                <p>Incoming Stock: {inventoryData.stockMovement.incoming}</p>
                <p>Outgoing Stock: {inventoryData.stockMovement.outgoing}</p>
            </div>

            <h1>Manufacturing</h1>
            <div className="section">
                <h2>Pending Orders: {manufacturingData.productionSchedule.pendingOrders}</h2>
                <p>In-progress Orders: {manufacturingData.productionSchedule.inProgressOrders}</p>
                <p>Machinery Utilization: {manufacturingData.resourceUtilization.machinery}</p>
                <p>Labor Utilization: {manufacturingData.resourceUtilization.labor}</p>
                <p>Raw Material Utilization: {manufacturingData.resourceUtilization.rawMaterials}</p>
            </div>

            <h1>Orders</h1>
            <div className="section">
                <h2>Pending Orders: {ordersData.orderFulfillment.pendingOrders}</h2>
                <p>Fulfilled Orders: {ordersData.orderFulfillment.fulfilledOrders}</p>
                <p>Total Revenue: ${ordersData.salesPerformance.totalRevenue}</p>
                <p>Profit Margin: {ordersData.salesPerformance.profitMargin}</p>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;
