from urllib.request import urlopen
commands = ["help","likebot","dislikebot","pflikebot","pfdislikebot","exit"]
def parse(cmd):
  if cmd not in commands:
    print("Invalid command. Type help for a list of commands")
  elif cmd == "help":
    print("likebot - likebots a comment\ndislikebot - dislikebots a comment\npflikebot - likebots a profile post\npfdislikebot - dislikebots a profile post")
  elif cmd == "exit":
    exit()
  else:
    print("Enter username")
    uname = input(">>>")
    urlopen("http://sheltered-castle-48436.herokuapp.com/{}/username/{}".format(cmd,uname))
    print("Success")
def main():
  print("Camden's 2.11 Likebot")
  print("Type help for a list of commands")
  result = input(">>>")
  parse(result)
while True:
  main()
