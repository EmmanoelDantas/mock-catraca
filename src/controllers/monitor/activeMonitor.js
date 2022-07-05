

const activeMonitor = (req, res) => {
    console.log(req.body);
    res.status(200).json({});
}

module.exports = {activeMonitor};