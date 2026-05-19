# 1
def cube_checker(volume, side):
    if volume <=0 or side<=0:
        return False
    else:
        return volume == side ** 3
# 2
def human_years_cat_years_dog_years(human_years):
    if human_years == 1:
        return [1, 15, 15]
    elif human_years == 2:
        return [2, 24, 24]
    else:
        catYears = 24 + (human_years - 2) * 4
        dogYears = 24 + (human_years - 2) * 5
        return [human_years, catYears, dogYears]
# 3
def zero_fuel(a, b, c):
    d = b*c
    return d >=a
# 4
def find_average(nums):
    a = 0
    for i in nums:
        a+=i
    return a / len(nums)
# 5
def solution(string):
    return string[::-1]