

# 2
# input - შემავალი ინფორმაცია , 
#output - გამომავალი ინფორმაცია , 
# მაგალითად სოლოლერნში რომ იყო პრინტერზე  როცა სკანერი ჩვენ ფურცელს ასკანერებს იგი ღებულობს ინფორმაციას ეს არის input-ის მაგ.
# ხოლო როცა პრინტერს გამოაქვს გამზადებული ფურცელი ეს არის output-ის მაგ.

# 3
value = input("შეიყვანეთ რაიმე მნიშვნელობა: ")
print(type(value))

# 4
# str
name = "Nika"  # str
city = "Tbilisi"  # str
color = "Black"  # str
food = "xinkali"  # str
language = "Georgian"  # str


# int
age = 14 # int
year = 2025  # int
score = 100  # int
height_cm = 157 # int
items = 5 # int


# float
weight = 60.4 # float
price = 9.99  # float
temperature = 36.6  # float
distance = 3.5 # float
pi = 3.14 # float

# ვერ მივხვდი სად მივუწერო კომენტარით მაგიტომაც დავალაგე str,int,float და გვერდითაც მივუწერე
# 5
num = 14     
name = "nika"  
height = 1.57

print(type(num))
print( type(name))
print(type(height))

# 6
word_1 = (input("input word 1 "))
word_2 = (input("input word 2 "))
word_3 = word_1 + word_2
print(word_3)

# 7
num1 = int(input("input num 1: "))
num2 = int(input("input num 2: "))
num3 = int(input("input num 3: "))
num4 = int(input("input num 4: "))
num5 = int(input("input num 5: "))

num6 = (num1 + num2 + num3 + num4 + num5 / 5)
print( "Arithmetic mean",  num6)

# 8
name = input("შემოიყვანეთ თქვენი სახელი: ")
last_name = input("შემოიყვანეთ თქვენი გვარი: ")
age = input("შემოიყვანეთ თქვენი ასაკი: ")
height = input("შემოიყვანეთ თქვენი სიმაღლე: ")
weight = input("შემოიყვანეთ თქვენი წონა: ")

print("my name is" + name + " my last name is" + last_name + "my age is" + age + "my height is" + height 
+  "and my weight is" + weight)