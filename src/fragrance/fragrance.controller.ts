import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('fragrance')
export class FragranceController {

    @Get()
    getAll(){
        return "Agatha's Business";
    }

    @Get(':id')
    getnameId(@Param('id') nameId){
        return nameId;
    }
    
    @Post()
    postFragrance(@Body() pureSeduction){
        return pureSeduction;
    }

    @Put()
    updateFragrance(){
        return "My updates";
    }

    @Get('freddy')
    getMyName(){
        return "Hello Freddy";
    }

    
}

