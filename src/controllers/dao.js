
const dao = (req, res) => {
    data = {
        object_changes: [
          {
            object: "access_logs",
            type: "inserted",
            values: {
              id: "519",
              time: "1532977090",
              event: "12",
              device_id: "478435",
              identifier_id: "0",
              user_id: "0",
              portal_id: "1",
              identification_rule_id: "0",
              card_value: "0",
              log_type_id: "-1"
            }
          }
        ],
        device_id: 478435
      }

    res.status(200).json({data});
}

module.exports = {dao}