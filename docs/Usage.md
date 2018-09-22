---
id: Usage
title: Using tyler
---

## How to Use?

Simply run **create** to get started once installed.

The command sequence is as follows:

```
create [template] [name]
```

The **name** is not-required/optional for some templates. See our current list of available templates you're able to generate using **tyler** [here](https://zishan-ali.github.io/tyler/docs/Usage.html#templates).

Commands:

```
Usage

  $ create [template] [name]

Options

  --help, prints this text,
  --version, prints version

Examples

  $ create
  ---------------------
  returns prompts where you can provide a template and name

  $ create atom
  ---------------------
  returns a prompt where you can enter a name

  $ create atom button
  ---------------------
  directly creates an [atom] called [button]

```

## Templates

The template name you'd succeed the **create** command with in your CLI would be the singular noun of the template you're using as shown below:

| **template** | **command** | **supports name** |
|-----------|-----------|----------|
| atoms | atom | ✅ |
| molecules | molecule | ✅ |
| organisms (apollo) | apollo-organism | ✅ |
| organisms (redux) | redux-organism | ✅ |
| components | component | ❌ |
| containers | container | ❌ |
| actions | action | ❌ |
| selectors | selector | ❌ |
| reducers | reducer | ❌ |
| stories | story | ❌ |
| queries | query | ❌ |
| mutations | mutation | ❌ |

