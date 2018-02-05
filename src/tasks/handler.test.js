import handler from './handler';
import {ADD_PRODUCT, UPDATE_PRODUCT,PENDING,PROCESSING,COMPLETE} from './task-types';

it('addTask adds task list and marks it as pending', () => {
  const tasks = [
    {
      type: UPDATE_PRODUCT,
      entity_id: 1,
      status:PENDING,
      data: {
        name: 'Simple Product 1',
        price: 10
      }
    }
  ]

  const task = {
    type: UPDATE_PRODUCT,
    entity_id: 1,
    data: {
      name: 'Simple Product 1',
      price: 10
    }
  }

  handler.addTask(task);

  expect(handler.getTasks()).toEqual(tasks);

});