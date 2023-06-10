// let a = 1;

export function interpreterCore(): string {
  return 'interpreter-core';
}

type TokenType = 'LET' | 'IDENTIFIER' | 'ASSIGN' | 'INT' | 'SEMICOLON';

interface Token {
  type: TokenType;
  literal: string;
}

const map: Record<string, TokenType> = {
  let: 'LET',
  '=': 'ASSIGN',
  ';': 'SEMICOLON',
};

export function lex(code: string): Token[] {
  function getTokenType(word: string): TokenType {
    return !isNaN(+word) ? 'INT' : map[word] || 'IDENTIFIER';
  }

  return code.split(' ').map((literal) => ({
    literal,
    type: getTokenType(literal),
  }));
}

export function interpret(code: string) {
  return lex(code);
}
