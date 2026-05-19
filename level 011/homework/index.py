# 1

numbers = []

for i in range(5):
    num = int(input("შეიყვანე რიცხვი: "))
    numbers.append(num)

numbers.sort()

smallest = numbers.pop(0)

print("ამოღებული რიცხვი:", smallest)
print("დარჩენილი სია:", numbers)


# 2

numbers = []

for i in range(6):
    num = int(input("შეიყვანე რიცხვი: "))
    numbers.append(num)

count = numbers.count(10)

print("10 გვხვდება", count, "ჯერ")

if count > 2:
    numbers.remove(10)

print(numbers)


# 3

numbers = [1, 2, 3, 4]

copy_numbers = numbers.copy()

copy_numbers.append(100)

copy_numbers.reverse()

print("ორიგინალი სია:", numbers)
print("კოპირებული სია:", copy_numbers)


# 4

numbers = []

for i in range(5):
    num = int(input("შეიყვანე რიცხვი: "))
    numbers.append(num)

numbers.sort()

if numbers[0] < 0:
    numbers.clear()

print(numbers)


# 5

numbers = []

for i in range(7):
    num = int(input("შეიყვანე რიცხვი: "))
    numbers.append(num)

numbers.sort()

maximum = numbers[-1]

count = numbers.count(maximum)

print("მაქსიმალური რიცხვი გვხვდება", count, "ჯერ")

numbers.remove(maximum)

print(numbers)


# 6

numbers = [1, 2, 3, 4, 5, 6]

print(numbers[:3])


# 7

numbers = [1, 2, 3, 4, 5, 6, 7, 8]

print(numbers[-4:])


# 8

numbers = [1, 2, 3, 4, 5, 6, 7]

print(numbers[2:5])