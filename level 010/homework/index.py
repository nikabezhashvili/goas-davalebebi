# 1

numbers = []

for i in range(3):
    num = int(input("შეიყვანე რიცხვი: "))
    numbers.append(num)

print(numbers)

# 2

numbers = [10, 20, 30, 40, 50]

print(numbers)

numbers.clear()

print(numbers)


# 3

numbers = [1, 2, 3, 4]

copy_numbers = numbers.copy()

copy_numbers[0] = 100

print("ორიგინალი სია:", numbers)
print("კოპირებული სია:", copy_numbers)


# 4

numbers = [5, 2, 7, 5, 9, 5, 1]

count = numbers.count(5)

print("5 გვხვდება", count, "ჯერ")


# 5

numbers = [10, 20, 30, 40]

removed = numbers.pop()

print("ამოღებული ელემენტი:", removed)
print("განახლებული სია:", numbers)


# 6

numbers = [1, 2, 3, 4, 5]

numbers.remove(3)

print(numbers)


# 7

numbers = [1, 2, 3, 4, 5]

numbers.reverse()

print(numbers)


# 8. 

numbers = [8, 3, 1, 9, 4, 2]

numbers.sort()

print("ზრდადობით:", numbers)

numbers.sort(reverse=True)

print("კლებადობით:", numbers)


# 9

numbers = []

for i in range(5):
    num = int(input("შეიყვანე რიცხვი: "))
    numbers.append(num)

numbers.sort()

numbers.pop()

print(numbers)


# 10

numbers = []

for i in range(6):
    num = int(input("შეიყვანე რიცხვი: "))
    numbers.append(num)

count = numbers.count(5)

print("5 გვხვდება", count, "ჯერ")

if 5 in numbers:
    numbers.remove(5)

print(numbers)


# 11

numbers = [1, 2, 3, 4, 5]

copy_numbers = numbers.copy()

copy_numbers.reverse()

print("ორიგინალი:", numbers)
print("კოპია:", copy_numbers)


# 12

numbers = []

for i in range(4):
    num = int(input("შეიყვანე რიცხვი: "))
    numbers.append(num)

total = sum(numbers)

if total > 100:
    numbers.clear()

print(numbers)


# 13

numbers = []

for i in range(5):
    num = int(input("შეიყვანე რიცხვი: "))
    numbers.append(num)

numbers.sort()

largest = numbers[-1]

numbers.remove(largest)

print(numbers)


# 14 done