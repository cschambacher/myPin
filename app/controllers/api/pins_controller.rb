class Api::PinsController < ApplicationController
    def new
        @pin = Pin.new
        render :new
    end
    
    def index
        render json: Pin.all.where(author_id: current_user.id)
    end

    def show
        @pin = Pin.find(params[:id])
        if @pin
            render :show
        else
            render json: @pin.errors.full_messages, status: 404
        end
    end

    def create
        @pin = current_user.pins.new(pin_params)
        if @pin.save
            render json: @pin
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def edit
        @pin = Pin.find(params[:id])
        render :edit
    end

    def destroy
        @pin = current_user.pins.find(params[:id])
        @pin.destroy
        render json: @pin
    end

    def update
        @pin = Pin.find(params[:id])
        if @pin.update(pin_params)
            render json: @pin
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    private

    def pin_params
        params.require(:pin).permit(:url, :title, :description, :author_id)
    end
end
