import { Test, TestingModule } from '@nestjs/testing';
import { MsBController } from './ms-b.controller';
import { MsBService } from './ms-b.service';

describe('MsBController', () => {
  let msBController: MsBController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsBController],
      providers: [MsBService],
    }).compile();

    msBController = app.get<MsBController>(MsBController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msBController.getHello()).toBe('Hello World!');
    });
  });
});
