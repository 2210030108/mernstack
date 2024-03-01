const Store = require('../schema/Store');

const createStore = async (req, res) => {
    try {
        const { name, location, employeeId } = req.body;
        const store = new Store({ name, location, employee: employeeId });
        await store.save();
        res.status(201).json(store);
    } catch (error) {
        console.error('Error creating store:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
const getAllStores = async (req, res) => {
    try {
        const stores = await Store.find({});
        res.status(200).json(stores);
    } catch (error) {
        console.error('Error fetching store details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { createStore,getAllStores };