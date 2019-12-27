json.partial! 'api/boards/board', board: @board
# json.pins do
#   @board.pins.each do |pin|
#     json.set! pin.id do
#       json.partial! 'api/pins/pin', pin: pin
#     end
#   end
# end