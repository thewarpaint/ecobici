# Ecobici

## Generating animation from screenshots

From https://unix.stackexchange.com/questions/24014/creating-a-gif-animation-from-png-files:

```
convert $(for file in *; do printf -- "-delay 50 %s " $file; done; ) -monitor animation.gif
```
