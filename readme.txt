INTENTION

Doing a 'conlole.log' or other 'console.*' is one of the most popular ways to debug javascript code. Unfortunately, this technique is not available in all browsers, which leads to additional errors. For this reason I have this little jQuery-Plugin.


VERSION
version 1.0.0
date    13.07.2011


USAGE

$.conLog ( value, tpye );

value
The value can be any string, number, array or object.

type
The type is equal to the type of the console. It is optional.
- log: console.log
- object: console.dir
- info: console.info
- warn: console.warn
- error: console.error
- trace: console.trace - is not avalible in the Internet Explorer trace -> log

----------

If you have any ideas to improve the plugin, do not hasitade to tell me.