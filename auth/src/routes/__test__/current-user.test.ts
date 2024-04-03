import supertest from 'supertest';
import { app } from '../../app';

it('responds with details about the current user', async () => {
  const authResponse = await global.signup();

  const response = await supertest(app)
    .get('/api/users/currentuser')
    .set('Cookie', authResponse || [])
    .send({})
    .expect(200);

  expect(response.body.currentUser.email).toEqual('test@test.com');

  expect(response.body.currentUser.email).toEqual('test@test.com');
});

it('responds with null if not authenticated', async () => {
  const response = await supertest(app)
    .get('/api/users/currentuser')
    .send()
    .expect(200);

  expect(response.body).toEqual({});
});
