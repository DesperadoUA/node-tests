const request = require('supertest')
const app = require('../../../app')
it('TDO form main page', (done)=>{
    request(app).post('/api/users')
    .send({
        username: 'user1',
        email: 'user1@mail.com',
        password: 'P4ssword'
    }).then((response) => {
        expect(response.status).toBe(200)
        expect(response.body.body.msg).toBe('Hello world')
        expect(response.body.confirm).toBe('ok')
        done()
    })
})