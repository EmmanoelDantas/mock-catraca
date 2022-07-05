
const uuid = require('uuid-js');

const loginController = (req, res) => {
    const session = uuid.create(1);

    console.log(req.body);
    res.status(200).json({session});
}

const logsGenerator = (req, res) => {
    const id = uuid.create(1);
    const device_id = uuid.create(1);
    const identifier_id = uuid.create(1);
    const user_id = uuid.create(1);
    const portal_id = uuid.create(1);
    const identification_rule_id = uuid.create(1);
    const log_type_id = uuid.create(1);

    const body = {
        id: `${id}`,
        time: 7,
        event: 7,
        device_id: `${device_id}`,
        identifier_id: `${identifier_id}`,
        user_id: `${user_id}`,
        portal_id: `${portal_id}`,
        identification_rule_id: `${identification_rule_id}`,
        qrcode_value: "",
        card_value: 123456,
        detection_confidence: 123123,
        mask: 123123,
        log_type_id: `${log_type_id}`
    }

    res.status(200).json({body});
}

module.exports = {loginController, logsGenerator};