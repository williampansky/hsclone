/**
 * @namespace eslint
 * @see [configuring](https://eslint.org/docs/user-guide/configuring)
 */
module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },

  /**
   * Extends the set of enabled rules from base configurations.
   *
   * @member extends
   * @memberof eslint
   * @see [extending-configuration-files](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)
   */
  extends: [
    'eslint:recommended',
    // 'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    // 'plugin:@typescript-eslint',
    'prettier',
    'prettier/react',
    'react-app'
  ],

  /**
   * An environment defines global variables that are predefined.
   *
   * @member env
   * @memberof eslint
   * @see [specifying-environments](https://eslint.org/docs/user-guide/configuring#specifying-environments)
   */
  env: {
    browser: true // browser global variables; e.g. `document` or `window`
  },

  /**
   * ESLint comes with a large number of rules. You can modify
   * which rules your project uses either using configuration
   * comments or configuration files.
   *
   * @member rules
   * @memberof eslint
   * @see [configuring-rules](https://eslint.org/docs/user-guide/configuring#configuring-rules)
   */
  rules: {
    /**
     * This rule aims to reduce the usage of
     * variables outside of their binding context.
     *
     * @memberof eslint:rules
     * @see [eslint:docs](https://eslint.org/docs/rules/block-scoped-var)
     */
    'block-scoped-var': 'error',

    /**
     * This rule looks for any underscores (`_`) within the source code.
     *
     * - It ignores leading & trailing underscores; e.g. only checks
     *   those in the middle of a variable name.
     * - If ESLint decides that the variable is a constant (all uppercase),
     *   then no warning will be thrown.
     * - This rule only flags definitions & assignments but not function calls.
     * - In case of ES6 `import` statements, this rule only targets the name
     *   of the variable that will be imported into the local module scope.
     * - `ignoreDestructuring: true` does not check destructured identifiers.
     *
     * Examples of **incorrect** code for this rule:
     * ```js
     * var my_favorite_color = "#112C85";
     * ```
     *
     * Examples of **correct** code for this rule:
     * ```js
     * var myFavoriteColor = "#112C85";
     * var { category_id } = query;
     * ```
     *
     * @memberof eslint:rules
     * @see [eslint:docs](https://eslint.org/docs/rules/camelcase)
     */
    camelcase: [
      'error',
      {
        ignoreDestructuring: true,
        properties: 'always'
      }
    ],

    /**
     * This rule enforces at least one newline (or absence thereof)
     * at the end of non-empty files.
     *
     * @memberof eslint:rules
     * @see [eslint:docs](https://eslint.org/docs/rules/eol-last)
     */
    'eol-last': ['error', 'always'],

    /**
     * This rule enforces a consistent indentation style of 2 spaces.
     *
     * - `'SwitchCase'` enforces indentation level for case
     *   clauses in switch statements.
     *
     * @memberof eslint:rules
     * @see [eslint:docs](https://eslint.org/docs/rules/indent)
     */
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],

    /**
     * This rule is aimed at catching debugging code that should be
     * removed and popup UI elements that should be replaced with less
     * obtrusive, custom UIs. As such, it will warn when it encounters
     * `alert`, `prompt`, & `confirm` function calls.
     *
     * @memberof eslint:rules
     * @see [eslint:docs](https://eslint.org/docs/rules/no-alert)
     */
    'no-alert': 'error',

    /**
     * This rule disallows the log method of the console object;
     * it still allows, however, `.warn()` & `.error()`.
     *
     * @memberof eslint:rules
     * @see [eslint:docs](https://eslint.org/docs/rules/no-console)
     */
    'no-console': ['error', { allow: ['warn', 'error'] }],

    /**
     * The no-eq-null rule aims reduce potential bug and unwanted
     * behavior by ensuring that comparisons to null only match `null`,
     * and not also `undefined`. As such it will flag comparisons
     * to `null` when using `==` and `!=`.
     *
     * @memberof eslint:rules
     * @see [eslint:docs](https://eslint.org/docs/rules/no-eq-null)
     */
    'no-eq-null': 'error',

    /**
     * This rule aims to eliminate unnecessary & potentially confusing
     * blocks at the top level of a script or within other blocks.
     *
     * @memberof eslint:rules
     * @see [eslint:docs](https://eslint.org/docs/rules/no-global-assign)
     */
    'no-global-assign': 'error',

    /**
     * This rule disallows modifications to read-only global variables.
     *
     * @memberof eslint:rules
     * @see [eslint:docs](https://eslint.org/docs/rules/no-lone-blocks)
     */
    'no-lone-blocks': 'error',

    /**
     * This rule is aimed at preventing the use of multiline strings. Some
     * consider this to be a bad practice as it was an undocumented feature
     * of JavaScript that was only formalized later.
     *
     * @memberof eslint:rules
     * @see [eslint:docs](https://eslint.org/docs/rules/no-multi-str)
     */
    'no-multi-str': 'error',

    /**
     * This rule aims to eliminate assignments from `return`
     * statements. As such, it will warn whenever an
     * assignment is found as part of `return`.
     *
     * Examples of **incorrect** code for this rule:
     * ```js
     * function doSomething() { return foo = bar + 2; }
     * ```
     *
     * @memberof eslint:rules
     * @see [eslint:docs](https://eslint.org/docs/rules/no-return-assign)
     */
    'no-return-assign': 'error',

    /**
     * Using `javascript:` URLs is considered by some as a form of `eval`.
     * Code passed in `javascript:` URLs has to be parsed and evaluated
     * by the browser in the same way that `eval` is processed.
     *
     * Examples of **incorrect** code for this rule:
     * ```js
     * location.href = 'javascript:void(0)';
     * ```
     *
     * @memberof eslint:rules
     * @see [eslint:docs](https://eslint.org/docs/rules/no-script-url)
     */
    'no-script-url': 'error',

    /**
     * This error is raised to highlight a potentially confusing &
     * potentially pointless piece of code. There are almost no situations
     * in which you would need to compare something to itself.
     *
     * Examples of **incorrect** code for this rule:
     * ```js
     * var x = 10;
     * if (x === x) x = 20;
     * ```
     *
     * @memberof eslint:rules
     * @see [eslint:docs](https://eslint.org/docs/rules/no-self-compare)
     */
    'no-self-compare': 'error',

    /**
     * This rule aims to warn when a regular string
     * contains what looks like a template literal placeholder.
     *
     * It will warn when it finds a string containing the
     * template literal place holder (`${something}`) that
     * uses either `"` or `'` for the quotes.
     *
     * @memberof eslint:rules
     * @see [eslint:docs](https://eslint.org/docs/rules/no-template-curly-in-string)
     */
    'no-template-curly-in-string': 'error',

    /**
     * This rule aims to eliminate the use of `undefined`, and as such,
     * generates a warning whenever it is used.
     *
     * Examples of **incorrect** code for this rule:
     * ```js
     * if (foo === undefined) { ... }
     * ```
     *
     * Examples of **correct** code for this rule:
     * ```js
     * if (typeof foo === "undefined") { ... }
     * ```
     *
     * @memberof eslint:rules
     * @see [eslint:docs](https://eslint.org/docs/rules/no-undefined)
     */
    'no-undefined': 'error',

    /**
     * This rule will warn when it encounters a reference to an
     * identifier that has not yet been declared.
     *
     * Examples of **incorrect** code for this rule:
     * ```js
     * foo();
     * function foo() {};
     * ```
     *
     * Examples of **correct** code for this rule:
     * ```js
     * function foo() {};
     * foo();
     * ```
     *
     * @memberof eslint:rules
     * @see [eslint:docs](https://eslint.org/docs/rules/no-use-before-define)
     */
    'no-use-before-define': 'error',

    /**
     * This rule aims to flag the concatenation of 2 literals when they
     * could be combined into a single literal. Literals can be strings
     * or template literals.
     *
     * Examples of **incorrect** code for this rule:
     * ```js
     * var a = `some` + `string`;
     * ```
     *
     * @memberof eslint:rules
     * @see [eslint:docs](https://eslint.org/docs/rules/no-useless-concat)
     */
    'no-useless-concat': 'error',

    /**
     * Asynchronous functions that don’t use `await` might not
     * need to be asynchronous functions and could be the unintentional
     * result of refactoring. This rule warns async functions which
     * have no `await` expression.
     *
     * Examples of **incorrect** code for this rule:
     * ```js
     * async function foo() { doSomething(); }
     * ```
     *
     * Examples of **correct** code for this rule:
     * ```js
     * async function foo() { await doSomething(); }
     * ```
     *
     * @memberof eslint:rules
     * @see [eslint:docs](https://eslint.org/docs/rules/require-await)
     */
    'require-await': 'error',

    /**
     * This rule aims to keep all variable declarations in the leading
     * series of statements. Allowing multiple declarations helps
     * promote maintainability and is thus allowed.
     *
     * Examples of **incorrect** code for this rule:
     * ```js
     * function doSomething() {
     *  var first;
     *  if (true) first = true;
     *  var second;
     * }
     * ```
     *
     * Examples of **correct** code for this rule:
     * ```js
     * function doSomething() {
     *  var first;
     *  var second;
     *  if (true) first = true;
     * }
     * ```
     *
     * @memberof eslint:rules
     * @see [eslint:docs](https://eslint.org/docs/rules/vars-on-top)
     */
    'vars-on-top': 'error'
  }
};
