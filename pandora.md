{% raw %}
{% capture _LINE_FEED %}
{% endcapture %}
{% if site.compress_html.ignore.envs contains jekyll.environment or site.compress_html.ignore.envs == "all" %}
  {{ content }}
{% else %}
  {% capture _content %}{{ content }}{% endcapture %}
  {% assign _profile = site.compress_html.profile %}
  {% include compress_html.html %}
  {{ _content }}
{% endif %}
{% endraw %}

# Main Content
Your main content goes here...