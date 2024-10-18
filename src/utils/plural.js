export default function plural(value, variants = {}, locale = 'ru-RU') {
    const key = new Intl.PluralRules(locale).select(value);
    return variants[key] || '';
}