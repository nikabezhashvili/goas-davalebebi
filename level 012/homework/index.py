# 1

def square(num):
    return num **2

print(square(5))


# 2

def average(a, b, c):
    return (a + b + c) / 3

print(average(10, 20, 30))


# 3

def is_positive(num):
    return num > 0

print(is_positive(5))
print(is_positive(-3))


# 4

def double(num):
    return num * 2

print(double(7))



# 5

def add(a, b=10):
    return a + b

print(add(5))
print(add(5, 20))


# 6

def greet(name="Guest"):
    print("Hello", name)

greet()
greet("Nika")


# 7

def sum_numbers():
    num1 = int(input("შეიყვანე პირველი რიცხვი: "))
    num2 = int(input("შეიყვანე მეორე რიცხვი: "))

    print(num1 + num2)

sum_numbers()


# 8

def future_age():
    age = int(input("შეიყვანე ასაკი: "))

    print(age + 10)

future_age()


# 9

def greet_user():
    name = input("შეიყვანე სახელი: ")

    print("Hello", name)

greet_user()


# 10

def multiply_numbers():
    num1 = int(input("შეიყვანე პირველი რიცხვი: "))
    num2 = int(input("შეიყვანე მეორე რიცხვი: "))
    num3 = int(input("შეიყვანე მესამე რიცხვი: "))

    print(num1 * num2 * num3)

multiply_numbers()



# 11

def convert_temperature():
    c = float(input("შეიყვანე ტემპერატურა ცელსიუსში: "))

    f = c * 9 / 5 + 32

    print(f)

convert_temperature()


# 12

def convert_time():
    hours = int(input("შეიყვანე საათები: "))

    minutes = hours * 60
    seconds = hours * 3600

    print("წუთები:", minutes)
    print("წამები:", seconds)

convert_time()


# 13

def average_score():
    score1 = float(input("შეიყვანე პირველი ქულა: "))
    score2 = float(input("შეიყვანე მეორე ქულა: "))
    score3 = float(input("შეიყვანე მესამე ქულა: "))
    score4 = float(input("შეიყვანე მეოთხე ქულა: "))

    average = (score1 + score2 + score3 + score4) / 4

    print(average)

average_score()