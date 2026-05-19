numbers = [3, -1, 7, -5, 0, 12, -8]

positive_count = 0
negative_count = 0

for n in numbers:
    if n > 0:
        positive_count += 1
    elif n < 0:
        negative_count += 1

print("დადებითი:", positive_count)
print("უარყოფითი:", negative_count)
