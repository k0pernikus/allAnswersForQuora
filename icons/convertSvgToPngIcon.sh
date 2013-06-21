for x in 16 48 128;
	do inkscape --export-png icon${x}.png -w ${x} drawing.svg;
done
