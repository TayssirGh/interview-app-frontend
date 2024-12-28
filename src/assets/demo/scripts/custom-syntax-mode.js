import CodeMirror from 'codemirror';

// Define your custom mode
CodeMirror.defineMode('javacc-parser', (config) => {
    const keywords = [
        'USE',
        'TEMPLATE',
        'FOR',
        'ALL',
        'CANDIDATES',
        'WHERE',
        'AND',
        'OR',
        'MATCH',
    ];
    const operators = ['=', '<', '>', '<=', '>=', 'MATCH'];
    const braces = ['{', '}', '(', ')'];

    return {
        token: function (stream) {
            if (stream.eatSpace()) return null;

            // Handle keywords
            if (stream.match(new RegExp(`\\b(${keywords.join('|')})\\b`, 'i'))) {
                return 'keyword';
            }

            // Handle operators
            if (stream.match(new RegExp(`(${operators.join('|')})`, 'i'))) {
                return 'operator';
            }

            // Handle braces
            if (braces.includes(stream.peek())) {
                stream.next();
                return 'bracket';
            }

            // Handle strings
            if (stream.match(/^"([^"]*)"/)) {
                return 'string';
            }

            // Handle identifiers and numbers
            if (stream.match(/^[a-zA-Z_][a-zA-Z0-9_.]*/)) {
                return 'variable';
            }
            if (stream.match(/^\d+/)) {
                return 'number';
            }

            stream.next();
            return null;
        },
    };
});
