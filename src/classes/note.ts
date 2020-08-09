export default class Note {
  name: string

  description: string

  reasons: string[]

  constructor(name: string, description: string, reasons: string[]) {
    this.name = name
    this.description = description
    this.reasons = reasons
  }

  getMarkdownNote = (): string => `
      ## Name:

      ### ${this.name}

      ## Description:

      ### ${this.description}

      ## Reasons to use:

      ${this.getReasonsMarkdown()}
    `

  getReasonsMarkdown = (): string => this.reasons.map((reason) => `- ${reason} \n`).join('\n')
}
