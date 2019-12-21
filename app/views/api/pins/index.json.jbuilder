json.array! @pins do |pin|
  json.partial! 'api/pins/pin', pin: pin
  if pin.photo.attached?
    json.photoUrl url_for(pin.photo)
  end
end