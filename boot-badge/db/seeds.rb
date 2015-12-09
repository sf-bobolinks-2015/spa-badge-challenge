# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emmanuel', city: cities.first)

Student.create(name: "Jupiter")
Student.create(name: "Paul")
Student.create(name: "Mike")
Student.create(name: "Chris")
Student.create(name: "Mary")

Badge.create(student_id: 1, text: "most mustachey")
Badge.create(student_id: 2, text: "most german")
Badge.create(student_id: 3, text: "most likely to wear a manbun")
Badge.create(student_id: 4, text: "most likely")
Badge.create(student_id: 5, text: "most likely to feed you")
Badge.create(student_id: 1, text: "has a hat. one hat.")
