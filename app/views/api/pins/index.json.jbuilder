# json.array! @pins do |pin|
#   json.partial! 'api/pins/pin', pin: pin
#   if pin.photo.attached?
#     json.photoUrl url_for(pin.photo)
#   end
# end

@pins.each do |pin|
  json.set! pin.id do
    json.partial! 'api/pins/pin', pin: pin
    # if pin.photo.attached?
    #   json.photoUrl url_for(pin.photo)
    # end
  end
end