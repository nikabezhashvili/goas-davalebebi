# 1

my_list = [10, 20, 30, 40, 50]

for i in my_list:
    print(i)


# 2

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers[0] = 100
numbers[1] = 200
numbers[2] = 300
numbers[3] = 400
numbers[4] = 500

print(numbers)


# 3

numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

total = 0

for i in numbers:
    total += i

print(total)


# 4

numbers = []

for i in range(5):
    num = int(input("შეიყვანე რიცხვი: "))
    numbers.append(num)

total = 0

for i in numbers:
    total += i

print("ჯამი:", total)


# 5

numbers = [1, 2, 3, 4, 5]

for i in range(len(numbers)):
    numbers[i] += 1

print(numbers)


# 6

numbers = [3, 8, 5, 12, 7, 10, 15, 18, 21]

count = 0

for i in range(len(numbers)):
    if numbers[i] % 2 != 0:
        count += 1

print("კენტი რიცხვების რაოდენობა:", count)