import { Test, TestingModule } from '@nestjs/testing';
import { MgController } from './mg.controller';

describe('MgController', () => {
  let controller: MgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MgController],
    }).compile();

    controller = module.get<MgController>(MgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
