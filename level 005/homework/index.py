# 1

age = int(input("შეიყვანე ასაკი: "))
student = input("სტუდენტია? (True/False): ")

result = age >= 18 and student == "True"

print(result)
print(type(age))

# 2

num1 = float(input("შეიყვანე პირველი რიცხვი: "))
num2 = float(input("შეიყვანე მეორე რიცხვი: "))

both_positive = num1 > 0 and num2 > 0
one_over_100 = num1 > 100 or num2 > 100

print(both_positive)
print(one_over_100)

# 3

num = int(input("შეიყვანე რიცხვი: "))

between = num >= 10 and num <= 50
negative = num < 0

print(between)
print(negative)

# 4

age = int(input("შეიყვანე ასაკი: "))
password = input("შეიყვანე პაროლი: ")

access = age >= 18 and password == "admin123"

print(access)

# 5

num1 = float(input("შეიყვანე პირველი რიცხვი: "))
num2 = float(input("შეიყვანე მეორე რიცხვი: "))
num3 = float(input("შეიყვანე მესამე რიცხვი: "))

average = (num1 + num2 + num3) / 3

result = average > 60 and num1 > 0 and num2 > 0 and num3 > 0

print(result)
print(type(result))

# 6

speed = int(input("შეიყვანე სიჩქარე: "))

violation = speed > 120 or speed < 0

print(violation)


# 7

height = float(input("შეიყვანე სიმაღლე: "))
weight = float(input("შეიყვანე წონა: "))

first_check = height > 1.70 and weight < 90
second_check = height < 1.50 or weight > 120

print(first_check)
print(second_check)

# 8

num = int(input("შეიყვანე რიცხვი: "))

even_positive = num % 2 == 0 and num > 0
odd_negative = num % 2 != 0 and num < 0

print(even_positive)
print(odd_negative)


# 9

num = input("შეიყვანე რიცხვი: ")

print(type(num))

num = float(num)

result = num > 0 and num < 100

print(result)


# 10

age = int(input("შეიყვანე ასაკი: "))
balance = float(input("შეიყვანე ბალანსი: "))
vip = input("VIP სტატუსი (True/False): ")

access = (age >= 18 and balance >= 100) or vip == "True"

print(access)