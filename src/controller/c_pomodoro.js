exports.start = (req, res)=>{

    let min = req.body.minuto
    let sec = req.body.sec

    res.render('pomodoro/start', {sec, min})

}
exports.main = (req, res) => {

    res.render('pomodoro/main')

}