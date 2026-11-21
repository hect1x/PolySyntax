import { SyntaxCardProps } from '@/shared/components/SyntaxCard/SyntaxCard'

export const SYNTAX_EXAMPLES: SyntaxCardProps[] = [
  {
    title: 'Arrow Functions',
    snippets: [
      { language: 'JavaScript', code: 'const add = (a, b) => a + b' },
      { language: 'TypeScript', code: 'const add = (a: number, b: number): number => a + b' },
    ],
  },
  {
    title: 'Destructuring',
    snippets: [
      { language: 'JavaScript', code: 'const { name, age } = person' },
      { language: 'Python', code: 'name, age = person["name"], person["age"]' },
    ],
  },
  {
    title: 'Template Literals',
    snippets: [
      { language: 'JavaScript', code: 'const msg = `Hello, ${name}!`' },
      { language: 'Python', code: 'msg = f"Hello, {name}!"' },
    ],
  },
]
