const event = (req, res) => {
    data = {
        event: {
          type: 7,
          name: 'TURN LEFT',
          time: 1484126902
        },
        device_id: 935107
      }

    res.status(200).json({data});
}

module.exports = {event}