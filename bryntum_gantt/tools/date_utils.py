
import pytz
import dateutil.parser
import datetime

def get_gantt_date(date_field, tz=None):
    """
    Convert datetime to str
    :param date_field:
    :param tz:
    :return: str
    """
    if not date_field:
        return ''
    if tz and hasattr(date_field, 'astimezone'):
        return date_field.astimezone(tz).strftime('%Y-%m-%dT%H:%M:%S')
    return date_field.strftime('%Y-%m-%dT%H:%M:%S')


def from_gantt_date(value):
    try:
        dt = datetime.datetime.strptime(value, '%Y-%m-%dT%H:%M:%S%z')
        # print('dt==',dt)
        dt = dt.astimezone(pytz.utc)
        return dt.replace(tzinfo=None)
    except ValueError:
        return dateutil.parser.parse(value, ignoretz=True)