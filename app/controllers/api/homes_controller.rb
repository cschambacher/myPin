class Api::HomesController < ApplicationController

    def index
        @pins = Pin.all
        render :index 
    end
end
