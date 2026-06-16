import dotenv from 'dotenv';
import chalk from 'chalk';

// Load env variables
dotenv.config();

export interface Example {
  name: string;
  description: string;
  run: () => Promise<void>;
}

const examples: Record<string, Example> = {
  '01-create-account': {
    name: '01-create-account',
    description: 'Generate keypairs and fund a test account using Friendbot',
    run: async () => {
      const mod = await import('./examples/01-create-account');
      await mod.run();
    },
  },
  '02-payment': {
    name: '02-payment',
    description: 'Send native XLM payment to a destination address',
    run: async () => {
      const mod = await import('./examples/02-payment');
      await mod.run();
    },
  },
  '03-create-trustline': {
    name: '03-create-trustline',
    description: 'Establish a trustline for a custom asset (USD)',
    run: async () => {
      const mod = await import('./examples/03-create-trustline');
      await mod.run();
    },
  },
  '04-multisig': {
    name: '04-multisig',
    description: 'Configure multi-signature and modify account thresholds',
    run: async () => {
      const mod = await import('./examples/04-multisig');
      await mod.run();
    },
  },
  '05-soroban-invoke': {
    name: '05-soroban-invoke',
    description: 'Simulate and invoke a Soroban smart contract method',
    run: async () => {
      const mod = await import('./examples/05-soroban-invoke');
      await mod.run();
    },
  },
};

async function main() {
  const args = process.argv.slice(2);
  const targetExample = args[0];

  if (targetExample) {
    const ex = examples[targetExample];
    if (!ex) {
      console.error(chalk.red(`Error: Example "${targetExample}" not found.`));
      console.log(`Available examples: ${Object.keys(examples).join(', ')}`);
      process.exit(1);
    }

    console.log(chalk.bold.cyan(`\n=== Running Example: ${ex.name} ===`));
    console.log(chalk.gray(`${ex.description}\n`));
    try {
      await ex.run();
      console.log(chalk.bold.green(`\n=== Execution Completed Successfully ===`));
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(chalk.bold.red(`\n=== Execution Failed: ${message} ===`));
      process.exit(1);
    }
  } else {
    // Menu layout
    console.log(chalk.bold.green('\n🎓 Stellar SDK Example Hub — Runnable Scripts 🎓'));
    console.log('To execute a script, run: ' + chalk.cyan('npm run run-example <example-name>\n'));
    console.log(chalk.bold('Available Examples:'));
    for (const [key, val] of Object.entries(examples)) {
      console.log(`  - ${chalk.yellow(key)}: ${val.description}`);
    }
    console.log('\nExample: ' + chalk.gray('npm run run-example 01-create-account\n'));
  }
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
