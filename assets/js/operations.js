const reshape = {
    "Sort rows": "df.sort_values(by=['sepal_length', 'sepal_width'])",
    "Sort index": "df.sort_index()",
    "Reset index": "df.reset_index()",
    "Remove columns": "df.drop(columns=['sepal_length', 'sepal_width'])",
    "Rename columns": `df.rename(
        columns={
          'sepal_length': 'sepal_length_new', 
          'sepal_width': 'sepal_width_new'
        }
      )`,
}
const subset_cols = {
    "Select a single column": "df['sepal_length']",
    "Select multiple columns": "df[['sepal_length', 'sepal_width']]",
    "Select columns using regex": "df.filter(regex='^petal')",
}

const subset_rows = {
    "Using logical criteria": `df[
    (df.sepal_length == 6.4) 
    & (df.sepal_width == 3.2)
]`,
    "Find duplicates": "df[df.duplicated(keep=False)]",
    "Drop duplicates": "df.drop_duplicates()",
    "Rows with missing values": "df[df.isnull().any(axis=1)]",
    "Rows without missing values": "df.dropna()",
    "Sample of n rows": "df.sample(n=3)",
    "First n rows": "df.head(3)",
    "Last n rows": "df.tail(3)"
}
