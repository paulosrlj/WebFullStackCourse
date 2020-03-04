const schedule = require('node-schedule')

//executar de 5 em 5 segundos, em qualquer minuto, as 11 horas, ignorar o dia do mês, ignorar o mês, 0 - domingo
// */5 diferente de /5
const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 0', function () {
    console.log('Executando tarefa 1', new Date().getSeconds())
})

setTimeout(() => {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1')
}, 20000);

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 11
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2', new Date().getSeconds())
})