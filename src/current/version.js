const major = 1
const minor = 0
const patch = 1
const description = 'Update HP to include stanima modifiers'
const changes = [
    'Version information now tracked and displayed.',
    'HP calculation updated to include Stanima modifier.',
    'Character names can be edited. To edit, click current name to edit, enter name, click elsewhere.'
]
const vDate = '13 June 2023'

class Version {
    static number = `${major}.${minor}.${patch}`
    static description = description
    static changes = [...changes]
    static date = vDate
    static formatted = function() {
        return `Version\n\t${this.number}\t ${this.date}\n\t${this.description}\n\t\t- ${this.changes.join('\n\t\t- ')}`
    }
    static arrayOfFormttedText = function() {
        return [
            `Version: ${this.number} on  ${this.date}`,
            this.description,
            ...this.changes.map(item => ` - ${item}`)
        ]
    }
}

const FormattedVersion = Version.formatted()
const FormattedVersionArray = Version.arrayOfFormttedText()


