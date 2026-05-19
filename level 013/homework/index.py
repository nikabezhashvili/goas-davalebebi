# 1

def sum_numbers(n):
    total = 0

    for i in range(1, n):
        total += i

    return total

print(sum_numbers(5))

# 2

def odd_count(n):
    count = 0

    for i in range(1, n + 1):
        if i % 2 != 0:
            count += 1

    return count

print(odd_count(10))



# 3

def input_sum():
    total = 0

    while True:
        num = int(input("შეიყვანე რიცხვი: "))

        if num == 0:
            break

        total += num

    print(total)

input_sum()


# 4

def list_sum(numbers):
    total = 0

    for i in numbers:
        total += i

    return total

print(list_sum([1, 2, 3, 4, 5]))



# 5

def even_numbers(numbers):
    evens = []

    for i in numbers:
        if i % 2 == 0:
            evens.append(i)

    return evens

print(even_numbers([1, 2, 3, 4, 5, 6]))



# 6

def count_number(numbers, target):
    count = 0

    for i in numbers:
        if i == target:
            count += 1

    return count

print(count_number([1, 2, 3, 2, 2, 5], 2))



# 6

def count_number(numbers, target):
    count = 0

    for i in numbers:
        if i == target:
            count += 1

    return count

print(count_number([1, 2, 3, 2, 2, 5], 2))


# 7

def cube(num):
    return num * num * num

print(cube(3))



# 8

def smaller(a, b):
    if a < b:
        return a
    else:
        return b

print(smaller(10, 4))


# 10,11 done