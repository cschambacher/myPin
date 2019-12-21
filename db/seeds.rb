# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

p "destroying data"
User.destroy_all
Pin.destroy_all
Board.destroy_all
p "seeding data"

u3 = User.create!(
  username: 'guest',
  password: 'password'
)

u1 = User.create!(
  username: 'Nora',
  password: 'nora123'
)

u2 = User.create!(
  username: 'Ria',
  password: 'ria123'
)

b1 = Board.create!(
  title: 'travels',
  private: false,
  author_id: u1.id,
)

b2 = Board.create!(
  title: 'fall',
  private: false,
  author_id: u1.id,
)

p1 = Pin.create!(
  description: 'cute cat hidden in autumn leaves',
  title: 'Cat',
  author_id: u2.id
)

p2 = Pin.create!(
  description: 'Autumn leaves and colors are the best',
  title: 'Autumn vibes',
  author_id: u1.id
)

p3 = Pin.create!(
  description: 'sunset on the Pacific ocean',
  title: 'sunset',
  author_id: u1.id
)

p4 = Pin.create!(
  description: 'Sakuras blloming in Japan',
  title: 'Spring blooms',
  author_id: u1.id
)

p5 = Pin.create!(
  description: 'somewhere in the irish country',
  title: 'Ireland',
  author_id: u1.id
)

p6 = Pin.create!(
  description: 'Bucharest streets in winter',
  title: 'Romania',
  author_id: u2.id
)
p7 = Pin.create!(
  description: 'Lavender fields in Provence',
  title: 'France',
  author_id: u2.id
)
p8 = Pin.create!(
  description: 'Nice',
  title: 'Nice',
  author_id: u2.id
)
p9 = Pin.create!(
  description: 'San Francisco coffee shops are cozy and welcoming',
  title: 'ritual coffee',
  author_id: u1.id
)

p10 = Pin.create!(
  description: 'Halloween is coming',
  title: 'Fall colors',
  author_id: u2.id
)

file1 = open('https://mypin-dev.s3-us-west-1.amazonaws.com/pin1.jpg')
p1.photo.attach(io: file1, filename: "pin1")
file2 = open('https://mypin-dev.s3-us-west-1.amazonaws.com/pin2.jpg')
p2.photo.attach(io: file2, filename: "pin2")
file3 = open('https://mypin-dev.s3-us-west-1.amazonaws.com/pin3.jpg')
p3.photo.attach(io: file3, filename: "pin3")
file4 = open('https://mypin-dev.s3-us-west-1.amazonaws.com/pin4.jpg')
p4.photo.attach(io: file4, filename: "pin4")
file5 = open('https://mypin-dev.s3-us-west-1.amazonaws.com/pin5.jpg')
p5.photo.attach(io: file5, filename: "pin5")
file6 = open('https://mypin-dev.s3-us-west-1.amazonaws.com/pin6.jpg')
p6.photo.attach(io: file6, filename: "pin6")
file7 = open('https://mypin-dev.s3-us-west-1.amazonaws.com/pin7.jpg')
p7.photo.attach(io: file7, filename: "pin7")
file8 = open('https://mypin-dev.s3-us-west-1.amazonaws.com/pin8.jpg')
p8.photo.attach(io: file8, filename: "pin8")
file9 = open('https://mypin-dev.s3-us-west-1.amazonaws.com/pin9.jpg')
p9.photo.attach(io: file9, filename: "pin9")
file10 = open('https://mypin-dev.s3-us-west-1.amazonaws.com/pin10.jpg')
p10.photo.attach(io: file10, filename: "pin10")