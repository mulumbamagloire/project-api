import { Bind, Controller, Get, Param } from '@nestjs/common';

@Controller('mg')
export class MgController {
    /*@Get(':mg')
    findAll() {
        return 'This action returns all mg';
    }*/
    @Get(":hello")
    @Bind(Param())
    findOne(params : {hello: string,}) {
        return `This action returns mg hello ` + params.hello;
    }
}
