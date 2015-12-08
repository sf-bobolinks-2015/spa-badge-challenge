require 'faker'

10.times do
  Student.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
end

100.times do
  Badge.create(title: Faker::Lorem.sentence, student_id: rand(1..10))
end

bools = [true, false]

1000.times do
  Vote.create(upvote?: bools.sample, student_id: rand(1..10), badge_id: rand(1..100))
end
