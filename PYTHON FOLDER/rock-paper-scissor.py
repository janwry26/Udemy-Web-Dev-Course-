# import random

# while True:
#     print("Rock, Paper, Scissors")
#     player_choice = input("Make your move (rock, paper, scissors): ").lower()
#     if player_choice not in ["rock", "paper", "scissors"]:
#         print("Invalid choice. Please choose rock, paper, or scissors.")
#         continue
#     computer_choice = random.choice(["rock", "paper", "scissors"])
#     print(f"You chose {player_choice} and the computer chose {computer_choice}.")
#     if player_choice == computer_choice:
#         print("It's a tie!")
#     elif player_choice == "rock" and computer_choice == "scissors":
#         print("You win!")
#     elif player_choice == "paper" and computer_choice == "rock":
#         print("You win!")
#     elif player_choice == "scissors" and computer_choice == "paper":
#         print("You win!")
#     else:
#         print("You lose.")
#     play_again = input("Do you want to play again? (yes/no) ").lower()
#     if play_again == "no":
#         break

import random
while True:
    print("Rock, Paper, Scissors")
    me = input("Its your turn, type the options you see above: ").lower()
    if me not in ["rock","paper","scissors"]:
        print("Invalid choice. please select within rock, paper, or scissors")
        continue
    computer = random.choice(["rock","paper","scissor"])
    print(f"you chose {me} and the computer choose {computer}.")
    if me == computer:
        print("its a tie!")
    elif me == 'rock' and computer == 'scissor':
        print("you win!")
    elif me == 'paper' and computer == 'rock':
        print("you win!")
    elif me == 'scissor' and computer == 'paper':
         print("you win!")
    else:
        print("you lose!")
    playAgain = input("do you want to play again(yes/no)").lower()
    if playAgain == "no":
        break
