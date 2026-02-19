# 1
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for i in range(11,21):
    nums.append(i)
for i in range(5):
    nums.pop()
print(nums)

# 2
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for i in range(11,21):
    nums.append(i)
    
for i in range(1,6):
    nums.remove(i)
print(nums)

# 3
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for i in range(11,21):
    nums.insert(10,i)

for i in range(11,16):
    nums.remove(i)

for i in range(5):
    nums.pop()
print(nums)


# 4
colors = ["red", "green", "blue", "yellow", "purple"]
colors.pop()
print(colors)


# 5
nums = [10, 20, 30, 40]
nums.append(50)
print(nums)