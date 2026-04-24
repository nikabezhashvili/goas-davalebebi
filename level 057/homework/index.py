# 1
def solution(text, ending):
    return text.endswith(ending)

# 2
def row_sum_odd_numbers(n):
    return n**3

# 3
def get_count(sentence):
    a = ['a', 'e', 'i','o','u']
    b = 0
    for i in sentence:
        if i in a:
            b+=1
    return b

# 4
def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0] + numbers[1]

# 5
def abbrev_name(name):
    a = name.split()
    b = a[0]
    c = a[1]
    return f'{b[0].upper()}.{c[0].upper()}'

# 6
def player_rank_up(pts):
     if pts>=100:
        return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
     else:
        return False

