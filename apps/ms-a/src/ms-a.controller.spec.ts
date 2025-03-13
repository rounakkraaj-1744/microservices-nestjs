import { Test, TestingModule } from '@nestjs/testing';
import { MsAController } from './ms-a.controller';
import { MsAService } from './ms-a.service';

describe('MsAController', () => {
  let msAController: MsAController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsAController],
      providers: [MsAService],
    }).compile();

    msAController = app.get<MsAController>(MsAController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msAController.getHello()).toBe('Hello World!');
    });
  });
});
